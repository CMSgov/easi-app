#!/bin/bash

jq --tab "del(.info._postman_id, .info._exporter_id)" EASI.postman_collection.json > tmp.postman && mv tmp.postman EASI.postman_collection.json