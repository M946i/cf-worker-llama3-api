# How to use

##### curl

```bash
curl --location --request GET 'https://?.workers.dev' \
--header 'Host: ?.workers.dev' \
--data-raw '{
    "prompt":"what is docker"
}'
```

##### python
```
import requests

url = "https://?.workers.dev"

headers = {
    'Host': '?.workers.dev',
}
data = "{\"prompt\": \"hello\"}"

if __name__ == '__main__':
    response = requests.post(url=url, headers=headers, data=data)
    print(response.text)
```
