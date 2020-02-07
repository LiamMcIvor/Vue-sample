pipeline {
  agent { docker { image 'node:8.12.0' } }
    environment {
        HOME = '.'
    }
  stages {
    stage('Clone Sources') {
      steps {
        git 'https://github.com/LiamMcIvor/Vue-sample.git'
      }
    }
    /*stage('Information') {
      
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Dependencies') {

    environment {
        HOME = '.'
    }
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Artifacts') {
      steps {
        sh 'tar -czf dist.tar.gz ./dist'
        stash 'dist.tar.gz'
        stash 'Dockerfile'
        stash 'nginx.conf'
        archiveArtifacts artifacts: 'dist.tar.gz', fingerprint: true
      }
    }
      */
      stage('--docker-build--') {
        agent any
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

/*pipeline {
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
}*/
