import { ArticleT, PaginationT } from "@/types/types";

import { fetchArticles } from "@/utils/fetchArticles";

global.fetch = jest.fn();

describe("fetchArticles function", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("should fetch articles successfully", async () => {
    const mockArticles: ArticleT[] = [
      {
        articleId: "1",
        imageId: "/img.png",
        title: "Why Do Cats Have Whiskers?",
        perex:
          " A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon",
        createdAt: "2023-07-31T17:40:43.9882855Z",
        lastUpdatedAt: "2023-07-31T17:40:43.9882855Z",
      },
      {
        articleId: "2",
        imageId: "/img.png",
        title: "Why Do Cats Eat Lasagnas?",
        perex:
          "A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon",
        createdAt: "2023-07-31T17:40:43.9882855Z",
        lastUpdatedAt: "2023-07-31T17:40:43.9882855Z",
      },
    ];
    const mockPagination: PaginationT = {
      offset: 0,
      limit: 0,
      total: 0,
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({
        items: mockArticles,
        pagination: mockPagination,
      }),
    } as unknown as Response);

    const result = await fetchArticles();

    expect(result).toEqual({
      items: mockArticles,
      pagination: mockPagination,
    });
  });

  it("throws an error if the fetch call fails", async () => {
    // Mock the fetch API to reject with an error
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Fetch failed"),
    );

    await expect(fetchArticles()).rejects.toThrow("Fetch failed");
  });
});
