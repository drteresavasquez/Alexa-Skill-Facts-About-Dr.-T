# Alexa Facts About Dr. T

This is an Alexa Skill created for my Nashville Software School Demo Day. 

Users can ask Alexa phrases that will give information about me.

# How to Interact with Alexa, Dr. T:
- Alexa, launch Dr. T.
- Alexa, ask Dr. T What are her Hobbies?
- Alexa, ask Dr. T What are her favorite things to do?
- Alexa, ask Dr. T What is her educational background?
- Alexa, ask Dr. T To inspire me
- Alexa, ask Dr. T What technologies is she familiar?
- Alexa, ask Dr. T How many kids does she have?
- Alexa, ask Dr. T How long has she been married?
- Alexa, ask Dr. T What does her husband do for a living?
- Alexa, ask Dr. T To tell me about {Trinity, Remle, Gabrielle, Oliva}
- Alexa, ask Dr. T To tell me about her front end capstone
- Alexa, ask Dr. T To tell me about her back end capstone
- Alexa, ask Dr. T Tell me about how she encourages diversity and inclusion

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
GetInformation what are her {Info}
GetInformation what are her {Info} things to do
GetInformation what is her {Info} background
GetInformation {Info} me
GetInformation what {Info} is she familiar
GetInformation how many {Info} does she have
GetInformation how long has she been {Info}
GetInformation what does her {Info} do for a living
GetInformation tell me about {Info}
GetInformation tell me about her {Info} end capstone
GetInformation tell me about how she encourages {Info} and inclusion
```
