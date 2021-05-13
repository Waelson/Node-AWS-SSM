## Description
Simple application that shows the integration with the AWS SSM service 

---

### Pre Requirements
- You must have an AWS account
- You must have IAM permission to write and read in SSM (see policy.json file in the repository)


## Steps
### 1 - Cloning project
```bash
git clone https://github.com/Waelson/Node-AWS-SSM.git
```

### 2 - Install dependencies
```bash
cd Node-AWS-SSM
```

Install all libraries
```bash
npm i
```

### 3 - Storing parameters
```bash
aws ssm put-parameter --name /config/database/user --value SVC_User --type String
```

### 4 - Accessing application
```bash
curl http://localhost:3000
```
Output
```json
{"name":"/config/database/user","value":"SVC_User"}
```
