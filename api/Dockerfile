FROM fedora:42

ENV BUN_INSTALL="/root/.bun"
ENV PATH="$BUN_INSTALL/bin:$PATH"

WORKDIR /api

COPY . .

RUN dnf install -y curl unzip
RUN curl -fsSL https://bun.com/install | bash -s "bun-v1.2.21"

RUN bun install

CMD ["bun", "run", "start"]
