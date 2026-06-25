/**
 * @test/core — the core library that lives ONLY in the main repo.
 */
export function greet(name: string): string {
  return `Hello, ${name}! — from @test/core`;
}

export const CORE_VERSION = "1.0.0";
