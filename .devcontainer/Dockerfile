FROM mcr.microsoft.com/devcontainers/typescript-node:24-bookworm

USER node

RUN curl -fsSL https://bun.com/install | bash

ENV BUN_INSTALL="/home/node/.bun"
ENV PATH="${BUN_INSTALL}/bin:${PATH}"