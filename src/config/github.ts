
import type {
  GitHubRepository,
  GitHubApiRepository,
} from "@/types/github";

const GITHUB_API_BASE_URL = "https://api.github.com";

const GITHUB_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

type RepositoryCacheEntry = {
  expiresAt: number;
  data: GitHubRepository[];
};

const repositoryCache = new Map<
  string,
  RepositoryCacheEntry
>();

export class GitHubApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);

    this.name = "GitHubApiError";
    this.status = status;
  }
}

const transformRepository = (
  repository: GitHubApiRepository,
): GitHubRepository => {
  return {
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    description: repository.description,
    htmlUrl: repository.html_url,
    homepage: repository.homepage,
    language: repository.language,
    stargazersCount: repository.stargazers_count,
    forksCount: repository.forks_count,
    topics: repository.topics ?? [],
    updatedAt: repository.updated_at,
    pushedAt: repository.pushed_at,
    isFork: repository.fork,
    isArchived: repository.archived,
  };
};

export const fetchGitHubRepositories = async (
  username: string,
  signal?: AbortSignal,
): Promise<GitHubRepository[]> => {
  const normalizedUsername = username.trim();

  // Validate username
  if (
    !normalizedUsername ||
    normalizedUsername.startsWith("[")
  ) {
    throw new GitHubApiError(
      "Add your GitHub username in src/config/site.ts before loading projects.",
      400,
    );
  }

  // Check cache
  const cached = repositoryCache.get(
    normalizedUsername,
  );

  if (
    cached &&
    cached.expiresAt > Date.now()
  ) {
    return cached.data;
  }

  // Correct GitHub API URL
  const url =
    `${GITHUB_API_BASE_URL}/users/` +
    `${encodeURIComponent(normalizedUsername)}` +
    `/repos?per_page=100&sort=updated&direction=desc`;

  console.log("GitHub API:", url);

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    signal,
  });

  // Handle API errors
  if (!response.ok) {
    if (response.status === 404) {
      throw new GitHubApiError(
        `GitHub user "${normalizedUsername}" not found.`,
        response.status,
      );
    }

    if (response.status === 403) {
      throw new GitHubApiError(
        "GitHub API rate limit reached. Please try again later.",
        response.status,
      );
    }

    throw new GitHubApiError(
      `Unable to load GitHub repositories. Status: ${response.status}`,
      response.status,
    );
  }

  const repositories =
    (await response.json()) as GitHubApiRepository[];

  // Remove archived repositories and forks
  const data = repositories
    .filter(
      (repository) =>
        !repository.archived &&
        !repository.fork,
    )
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime(),
    )
    .map(transformRepository);

  // Store in cache
  repositoryCache.set(normalizedUsername, {
    expiresAt: Date.now() + GITHUB_CACHE_TTL,
    data,
  });

  return data;
};
