"use client";

import * as React from "react";
import { Loader2Icon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

interface ConnectAccountDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConnect: (email: string, password: string) => Promise<void>;
}

export function ConnectAccountDrawer({
  open,
  onOpenChange,
  onConnect,
}: ConnectAccountDrawerProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await onConnect(email, password);
      onOpenChange(false);
      setEmail("");
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.View>
          <Drawer.Backdrop />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Connect MCOC Account</DrawerTitle>
              <DrawerDescription>
                Enter your Kabam account credentials to connect your Marvel
                Contest of Champions account.
              </DrawerDescription>
            </DrawerHeader>

            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="connect-email">Email</FieldLabel>
                  <Input
                    id="connect-email"
                    type="email"
                    placeholder="summoner@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="connect-password">Password</FieldLabel>
                  <Input
                    id="connect-password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    disabled={isLoading}
                    required
                  />
                </Field>
              </FieldGroup>

              <DrawerFooter>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Loader2Icon className="mr-2 size-4 animate-spin" />
                  )}
                  Connect Account
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => onOpenChange(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              </DrawerFooter>
            </form>

            <p className="text-muted-foreground mt-4 text-center text-xs">
              Your credentials are used only to authenticate with Kabam and are
              never stored on our servers.
            </p>
          </DrawerContent>
        </Drawer.View>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
