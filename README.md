# visualization-platform-app

An Electron + Vite 8 application with Vue and TypeScript

## 📋 About

A modern desktop application built with Electron, Vite, Vue 3, and TypeScript. This project provides a solid foundation for building fast, efficient cross-platform desktop applications with a focus on developer experience and performance.

## 🛠️ Tech Stack

- **Electron** (^41.0.3) - Cross-platform desktop framework
- **Vite** (^8.0.0) - Lightning-fast frontend build tool
- **Vue** (^3.5.30) - Progressive JavaScript framework
- **TypeScript** (^5.9.3) - Type-safe development
- **ESLint** (^10.0.3) - Code quality
- **Prettier** (^3.8.1) - Code formatting

## 📁 Project Structure

```
src/
├── main/           # Main process (Electron backend)
├── preload/        # Preload scripts for IPC bridge
└── renderer/       # Renderer process (Vue application)
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- pnpm (recommended) or npm

### Installation

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### Type Checking

```bash
$ pnpm typecheck
```

### Code Quality

```bash
# Lint
$ pnpm lint

# Format
$ pnpm format
```

### Build

```bash
# For Windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux

# Build in directory mode (for testing)
$ pnpm build:unpack
```

## 📦 Build Output

The final build output is exported to the `release/` directory.

## 🔧 Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 📝 License

MIT
