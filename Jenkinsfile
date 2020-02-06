pipeline {
    agent any
    stages {
        stage('--docker-build--') {
        	steps {
        		sh "docker build -t liammcivor/vehicle-front-end:$BUILD_NUMBER -t liammcivor/vehicle-front-end:latest ."
        	}
        }
        stage('--dockerhub-push--') {
        	steps {
        		withDockerRegistry([ credentialsId: "dockerhub-Liam", url: "" ]) {
        			sh "docker push liammcivor/vehicle-front-end:$BUILD_NUMBER"
        			sh "docker push liammcivor/vehicle-front-end:latest"
        		}
        	}
        }
        stage('--test-deploy--') {
            steps {
            	sh "ssh -T -i /home/jenkins/key.pem ubuntu@ec2-18-130-253-83.eu-west-2.compute.amazonaws.com ./vehicle-front-end.sh"
            }
        }
        stage('--live-deploy--') {
        	steps {
        		sh "ssh -T -i /home/jenkins/key.pem ubuntu@ec2-52-56-172-54.eu-west-2.compute.amazonaws.com ./vehicle-front-end.sh"
        	}
        }
    }
}
