# Wizard Form!

- create a form for editing 3 attributes
    - name
    - occupation
    - house
- on form submit, save that to an array ... somewhere
    - confirm the new wizard is in the array by:
        - consoloe.log()
        - maybe list them out
        - or use inspector


## Steps
- [X] Create a WizardForm.jsx
    - fill out the basics (an import, a fn, an export)
    - add a section
    - add a form
    - add one input
- [X] Show the WizardForm in the App
- [X] hook up the input so its a connected component
    - create some state by called `useState()`
    - set the val of your input using your state variable
    - add on onChange that calls your setState fn
- [ ] sending an action from WizardForm to App
    - begin by `console.log`-ing the wizard submitted in the form
