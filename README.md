# Alexa Facts About Dr. T

This is an Alexa Skill created for my Nashville Software School Demo Day. 

Users can ask Alexa phrases that will give information about me.

# How to Interact with Alexa, Cape Wearing Mama:
- Alexa, launch Cape Wearing Mama.
- Alexa, ask Cape Wearing Mama What are her Hobbies?
- Alexa, ask Cape Wearing Mama What are her favorite things to do?
- Alexa, ask Cape Wearing Mama What is her educational background?
- Alexa, ask Cape Wearing Mama To inspire me
- Alexa, ask Cape Wearing Mama What technologies is she familiar?
- Alexa, ask Cape Wearing Mama How many kids does she have?
- Alexa, ask Cape Wearing Mama How long has she been married?
- Alexa, ask Cape Wearing Mama What does her husband do for a living?
- Alexa, ask Cape Wearing Mama To tell me about {Trinity, Remle, Gabrielle, Oliva}
- Alexa, ask Cape Wearing Mama To tell me about her front end capstone
- Alexa, ask Cape Wearing Mama To tell me about her back end capstone
- Alexa, ask Cape Wearing Mama Tell me about how she encourages diversity and inclusion

## Intent Schema

```
{
  "intents": [
    {
      "slots": [
        {
          "name": "Info",
          "type": "LIST_OF_TERMS"
        }
      ],
      "intent": "GetInformation"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
```

## List of Terms
```
hobbies
favorite
inspire
educational
technologies
kids
married
husband
Trinity
Remle
Gabrielle
Olivia
front
back
diversity
```

## Sample Utterances
```
GetDefinition what are her {Info}
GetDefinition what are her {Info} things to do
GetDefinition what is her {Info} background
GetDefinition {Info} me
GetDefinition what {Info} is she familiar
GetDefinition how many {Info} does she have
GetDefinition how long has she been {Info}
GetDefinition what does her {Info} do for a living
GetDefinition tell me about {Info}
GetDefinition tell me about her {Info} end capstone
GetDefinition tell me about how she encourages {Info} and inclusion
```