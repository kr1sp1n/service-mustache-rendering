FORMAT: 1A

# POST /

+ Request (application/json)

    + Attributes (object)
        + template: (string) - Mustache formatted template
        + data: (object) - view data

    + Body

            {
                "template": "{{greeting}} {{person}}",
                "data": {
                  "greeting": "Hello",
                  "person": "World"
                }
            }
