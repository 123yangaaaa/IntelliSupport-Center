"use client"

import { ModelConfig } from "@/components/model-config";
import { Card } from "@/components/ui/card";
import { Wrench, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">AI Model Configuration Platform</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Configure and use various AI models including GPT-4, Claude, and GLM-4
            </p>
          </section>

          {/* Configuration Component */}
          <ModelConfig />

          {/* Features Grid */}
          <section className="grid md:grid-cols-3 gap-6 py-8">
            <Card className="p-6">
              <Wrench className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Easy Configuration</h3>
              <p className="text-muted-foreground">
                Simple setup process for multiple AI models with secure API key management
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Integration</h3>
              <p className="text-muted-foreground">
                Quickly integrate with your chosen AI model and start making API calls
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-muted-foreground">
                Your API keys are securely stored and never exposed to third parties
              </p>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}