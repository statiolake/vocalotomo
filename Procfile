release: python backend/manage.py migrate
web: sh -c 'cd backend && gunicorn apiserver.wsgi --log-file -'
