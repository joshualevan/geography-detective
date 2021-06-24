import { uuid } from 'uuidv4'

const countries = [
    {
        "id" : uuid(),
        "name" : "The United States of America",
        "background" : "./artwork/backgrounds/united-states.jpg",
        "flag" : "",
        "abbreviation" : "USA",
        "contitnent" : "North America",
        "capital" : "Washington, D.C.",
        "city" : "New York City",
        "witnesses" : [
            {
                "id" : uuid(),
                "name" : "Will Bradford",
                "age" : 29,
                "photo" : "./artwork/witnesses/unitedStates-1.jpg"
            },
            {
                "id" : uuid(),
                "name" : "Susan Kim",
                "age" : 26,
                "photo" : "./artwork/witnesses/unitedStates-2.jpg"
            },
            {
                "id" : uuid(),
                "name" : "Bian Nguyen",
                "age" : 78,
                "photo" : "./artwork/witnesses/unitedStates-3.jpg"
            },
            {
                "id" : uuid(),
                "name" : "Allegra Jones",
                "age" : 22,
                "photo" : "./artwork/witnesses/unitedStates-4.jpg"
            },
            {
                "id" : uuid(),
                "name" : "Lucy Schnider",
                "age" : 30,
                "photo" : "./artwork/witnesses/unitedStates-5.jpg"
            },
            {
                "id" : uuid(),
                "name" : "Terrance Williams",
                "age" : 35,
                "photo" : "./artwork/witnesses/unitedStates-6.jpg"
            },
        ]
    }
]

export default countries