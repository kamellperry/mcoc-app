"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to app (mock auth)
    router.push("/app");
  }

  return (
    <div className="bg-background flex min-h-svh flex-col">
      {/* Header with back button */}
      <header className="flex items-center px-4 py-4 sm:px-6">
        <Button
          render={<Link href="/" />}
          variant="ghost"
          size="icon"
          className="-ml-2"
        >
          <ArrowLeftIcon className="size-5" />
          <span className="sr-only">Back to home</span>
        </Button>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col px-4 pt-8 sm:px-6 sm:pt-16">
        <div className="mx-auto w-full max-w-sm">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="summoner@example.com"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  required
                />
              </Field>
              <Field className="pt-2">
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Loader2Icon className="mr-2 size-4 animate-spin" />
                  )}
                  Continue
                </Button>
              </Field>
            </FieldGroup>
          </form>

          {/* Footer */}
          <p className="text-muted-foreground mt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <span className="text-foreground/60">Sign up coming soon</span>
          </p>
        </div>
      </main>
    </div>
  );
}
