# Sandbox: _"react-spa"_

repo: `sandbox-react-spa`

A simple app created with React along with a CSS-in-JS library.

> ⚠ This repo is a sandbox set up to try out code, report issues and collect notes about specific topics.

## Main Goals

- Use [Create React App](https://create-react-app.dev/) to set up the project.
- Try out a CSS-in-JS solution: [Styled Components](https://styled-components.com/).

## Other Goals

- Deploy the app to Vercel.
- Try out [Renature](https://formidable.com/open-source/renature/) to create animations.

## Some notes on

tbd

## Roadmap

- update this README.
- 🎆 merge `renature` animations.
- 🚦 start making some tests.

consult a more complete list 👉 [ROADMAP](ROADMAP.md).

## Usage

Scripts are inherited from [CRA](https://create-react-app.dev/docs/available-scripts/).

| command     | description                                               |
| ----------- | --------------------------------------------------------- |
| `npm start` | Runs the app in the dev mode @ localhost:3000 |

## Development Environment

| about                               | tool       | notes     |
| ----------------------------------- | ---------- | --------- |
| [package manager](#package-manager) | `npm`      | `8.x`     |
| [formatter](#code-style)            | `prettier` |
| [linter](#code-style)               | `eslint`   |
| [deployment](#deployment)           | ---        |
| [system](#system)                   | ---        | about eol |

### Package manager

### Code Style

Custom rules for ESlint was added in `package.json`.

### Deployment

### System

#### dealing with EOLs

Git is configured to normalize (ie using `LF`) files on checkin and checkout
(with some notable exceptions for win specific files), in order to
keep indexed files eol consistent with `LF` choice.

This is achieved by setting up a `.gitattributes` file.

```text

* text=auto eol=lf

```

Prettier is default configured to set `LF` linebreaks. Running prettier formats files
in the current working directory.

ESlint has a rule that warns you if you are using `CRLF`.

VSCode supports either `LF` and `CRLF`. I told VSC to use the former for all files:

```jsonc
// .vscode\settings.json

"files.eol" = "\n"
```

however this is a sort of suggestion, and it works on creating new files; generally VSCode picks up the most common line terminator found on opening the file.

see this [post](https://stackoverflow.com/questions/50904632/vscode-not-defaulting-to-n-end-of-line) which references
also [vscode source](https://github.com/microsoft/vscode/blob/b8178e3e2f3f620ebdd31dfbfba937ff1b12ee04/src/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder.ts#L27).

## Privacy
