run:
	docker run -v $PWD:/app/backend -p 8000:8000 backend:latest

build:
	docker build -t backend:latest .

shell:
	docker run -it backend /bin/bash

local:
	python3 manage.py runserver 127.0.0.1:8000 --settings=backend.local_settings
