default: build

build:
	docker-compose -f dev.yml build

dev:
	docker-compose -f dev.yml up

restart:
	docker-compose -f dev.yml restart

down:
	docker-compose -f dev.yml down
