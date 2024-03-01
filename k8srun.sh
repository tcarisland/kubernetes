#!/bin/bash -x

#kubectl port-forward service/clientservice 3000:3000

kubectl apply -f client-deployment.yaml,client-service.yaml,db-persistentvolumeclaim.yaml,mongodb-deployment.yaml,mongodb-service.yaml,tcapi-deployment.yaml,tcapi-service.yaml
#kubectl delete -f client-deployment.yaml,client-service.yaml,db-persistentvolumeclaim.yaml,mongodb-deployment.yaml,mongodb-service.yaml,tcapi-deployment.yaml,tcapi-service.yaml