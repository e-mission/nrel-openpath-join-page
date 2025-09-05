# A generic join page for NREL OpenPATH studies and programs

**Issues:** Since this repository is part of a larger project, all issues are tracked in the central docs repository (https://github.com/e-mission). If you have a question, as suggested by the open source guide, please file an issue instead of sending an email. Since issues are public, other contributors can try to answer the question and benefit from the answer.

## Development

We use docker images for the software dependencies since we will not be modifying them here.

So the steps are:

#### Customize the config file

If you wish to test a config file, either find or create it, then alter the ```CONFIG_URL``` to access that file, should be similar to:```https://raw.githubusercontent.com/{user/repo/branch}/configs/${STUDY_NAME}.nrel-op.json```

*note url extention mentioned in the testing section below*

#### Launch dev environment

```
$ docker-compose -f docker-compose.dev.yml  up
...
```

#### Test the frontend install

Go to http://localhost:3274/ to see the front-end. Note that the port is *3274*
instead of the *8080* in the logs, since we remap it as part of the docker-compose.

If customizing the config file, go to http://localhost:3274/?study_config=[your_program-name_here] in order to view the results of your customizations, navigating without the GET/query parameter will result in viewing the default stage page. 

### Design decisions

This join page is designed to work as a flexible, dynamic join page for any new studies that may be added to support OpenPATH.
The join-pages will be based off of the data within the config files in [nrel-openpath-deploy-configs](https://github.com/e-mission/nrel-openpath-deploy-configs)
