/**
 * Parses search parameters for pagination with proper defaults and validation.
 * @param {Promise<{ page?: string; limit?: string }>} searchParams - The search parameters promise.
 * @returns {Promise<{ page: number; limit: number; offset: number }>} Parsed pagination parameters.
 */
export async function parsePaginationParams(
  searchParams: Promise<{ page?: string; limit?: string }>,
): Promise<{ page: number; limit: number; offset: number }> {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params.page || "1", 10));
  const limit = Math.max(1, Math.min(100, Number.parseInt(params.limit || "20", 10)));
  const offset = (page - 1) * limit;

  return { page, limit, offset };
}
