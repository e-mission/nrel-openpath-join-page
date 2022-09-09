# A generic join-page for OpenPATH

Issues: Since this repository is part of a larger project, all issues are tracked in the central docs repository. If you have a question, as suggested by the open source guide, please file an issue instead of sending an email. Since issues are public, other contributors can try to answer the question and benefit from the answer.

## Development

We use docker images for the software dependencies since we will not be modifying them here.

So the steps are:

#### Launch dev environment

```
$ docker-compose -f docker-compose.dev.yml  up
Creating network "em-public-dashboard_emission" with the default driver
Creating em-public-dashboard_db_1 ... done
Creating em-public-dashboard_plot-gen_1  ... done
Creating em-public-dashboard_dashboard_1 ... done
...
dashboard_1  | Starting up http-server, serving ./
dashboard_1  | Available on:
dashboard_1  |   http://127.0.0.1:8080
dashboard_1  |   http://172.25.0.3:8080
dashboard_1  | Hit CTRL-C to stop the server
...
notebook-server_1  |
notebook-server_1  |     To access the notebook, open this file in a browser:
notebook-server_1  |         file:///root/.local/share/jupyter/runtime/nbserver-22-open.html
notebook-server_1  |     Or copy and paste one of these URLs:
notebook-server_1  |         http://f8317197efaf:8888/?token=5cfd541b7461a47310c9c8aaa4114f921457a6f17b8ca159
notebook-server_1  |      or http://127.0.0.1:8888/?token=5cfd541b7461a47310c9c8aaa4114f921457a6f17b8ca159
...
```

#### Test the frontend install

Go to http://localhost:3274/ to see the front-end. Note that the port is *3274*
instead of the *8080* in the logs, since we remap it as part of the docker-compose.

### Design decisions

This join page is designed to work as a flexible, dynamic join page for any new Studies that may be added to support OpenPATH.
The join-pages will be based off of the data within the config files in [nrel-openpath-deploy-configs](https://github.com/e-mission/nrel-openpath-deploy-configs)
