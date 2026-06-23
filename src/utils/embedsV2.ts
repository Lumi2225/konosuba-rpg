/**
 * Discord Embed V2 factory utilities
 * Embeds without colors for minimal, modern look
 */

export interface EmbedV2 {
  title?: string;
  description?: string;
  image?: {
    url: string;
  };
}

/**
 * Create a basic V2 embed without color
 */
export function createEmbedV2(options: EmbedV2): EmbedV2 {
  return {
    title: options.title,
    description: options.description,
    image: options.image,
  };
}

/**
 * Create an embed for text-only responses
 */
export function createTextEmbedV2(description: string): EmbedV2 {
  return createEmbedV2({ description });
}

/**
 * Create an embed for image-based responses
 */
export function createImageEmbedV2(imageUrl: string, description?: string): EmbedV2 {
  return createEmbedV2({
    description,
    image: { url: imageUrl },
  });
}

/**
 * Create a titled embed with description
 */
export function createTitledEmbedV2(title: string, description: string): EmbedV2 {
  return createEmbedV2({
    title,
    description,
  });
}

/**
 * Create a titled embed with image
 */
export function createTitledImageEmbedV2(title: string, imageUrl: string, description?: string): EmbedV2 {
  return createEmbedV2({
    title,
    description,
    image: { url: imageUrl },
  });
}
