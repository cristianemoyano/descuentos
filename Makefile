run:
	docker-compose up

build:
	docker-compose build

deploy:
	git push heroku master
