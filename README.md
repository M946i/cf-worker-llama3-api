# How to use

##### curl

```bash
curl --location --request GET 'your api address(https://?.workers.dev)' \
--header 'Host: your api address(no protocol!!!)' \
--data-raw '{
    "prompt":"what is docker"
}'
```
```python
import requests

url = "https://llama3.m946i.workers.dev"

headers = {
    'Host': 'llama3.m946i.workers.dev',
}
data = "{\"prompt\": \"hello\"}"

if __name__ == '__main__':
    response = requests.post(url=url, headers=headers, data=data)
    print(response.text)
```
