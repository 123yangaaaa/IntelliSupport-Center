"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useModelConfig } from "@/lib/use-model-config";

const MODEL_OPTIONS = [
  { value: "gpt-4", label: "GPT-4", provider: "openai" },
  { value: "gpt-4-turbo", label: "GPT-4 Turbo", provider: "openai" },
  { value: "claude-3-opus", label: "Claude 3 Opus", provider: "anthropic" },
  { value: "glm-4", label: "GLM-4", provider: "zhipu" },
  { value: "glm-4-plus", label: "GLM-4 Plus", provider: "zhipu" },
];

export function ModelConfig() {
  const { model, apiKey, setModel, setApiKey } = useModelConfig();
  const [provider, setProvider] = useState("");

  useEffect(() => {
    const selectedOption = MODEL_OPTIONS.find(opt => opt.value === model);
    if (selectedOption) {
      setProvider(selectedOption.provider);
    }
  }, [model]);

  const handleSave = () => {
    // Here you could add validation or show a success message
    console.log("Configuration saved:", { model, apiKey });
  };

  const getApiKeyPlaceholder = () => {
    switch (provider) {
      case "openai":
        return "Enter your OpenAI API key";
      case "anthropic":
        return "Enter your Anthropic API key";
      case "zhipu":
        return "Enter your ZhipuAI API key";
      default:
        return "Select a model first";
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="model">Select AI Model</Label>
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a model" />
            </SelectTrigger>
            <SelectContent>
              {MODEL_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="apiKey">API Key</Label>
          <Input
            id="apiKey"
            type="password"
            placeholder={getApiKeyPlaceholder()}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <p className="text-sm text-muted-foreground">
            Your API key will be stored securely in your browser
          </p>
        </div>

        <Button className="w-full" onClick={handleSave}>
          Save Configuration
        </Button>
      </div>
    </Card>
  );
}