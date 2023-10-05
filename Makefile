lint-frontend:
	make -C frontend lint

install:
	npm ci

start-frontend:
	make -C frontend start

start-backend:
	node server.js

start:
	make start-backend & make start-frontend
