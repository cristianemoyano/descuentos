run:
	docker run -v $PWD:/app/frontend -p 3000:3000 frontend:latest

build:
	docker build -t frontend:latest .

shell:
	docker run -it frontend /bin/bash