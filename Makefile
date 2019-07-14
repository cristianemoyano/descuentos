run:
	docker-compose up

build:
	docker-compose build

build-no-cache:
	docker-compose build --no-cache

deploy:
	git push heroku master

clean:
	docker container rm -f $(docker container ls -qa)
	docker image rm -f $(docker image ls -q)
