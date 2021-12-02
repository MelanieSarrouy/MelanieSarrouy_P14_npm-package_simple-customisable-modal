<br/>
<p align="center"><img src="https://github.com/MelanieSarrouy/MelanieSarrouy_P14_npm-package_simple-customisable-modal/blob/main/src/lib/components/assets/modale.JPG?raw=true" alt="modal's preview" /></p>

# A modal react component simple and customizable with an animation

 ### About this the Modal component
  
This is a simple Modal component for react projects.

The Modal component renders a pre-styled modal
It consists of:
- the modal background with an easily customizable style,
- the modal container with an easily customizable style,
- the modal content with an easily customizable style,
- the possibility to add the children you want in the modal content
- the possibility to turned on or not the animation of the modal appear
- the possibility to display or not the modal's closing button


## Installation

You can install the [simple-react-modale-ui](https://www.npmjs.com/package/@melanie-sarrouy/simple-react-modale-ui) with [npm](https://yarnpkg.com/):

`npm install @melanie-sarrouy/simple-react-modale-ui`
   
## How to use

### Import
Simply import the Modal component into the file you want to use the modal with and define its children for the content of your modal and, of course, define the styles if you want to customise them.

`import { Modal } from @melanie-sarrouy/simple-react-modale-ui`

### Example

        <Modale
	        hideModale={closeModale}
	        styleModaleBackground
	        styleModale={{padding: 25, backgroundColor: 'red' }}
	        styleModaleContent
	        animation={true}
	        closeButton={true}
        >
	        <h1>Your modal's message here !</h1>
	        <p>more text, or an image or an input</>
        </Modale>
  
### State

The modal functionality is handled by the local state of the modal's parent. Therefore, the parent component requires **state**. I have used *modaleIsOpen* and *setModaleIsOpen* as variable names, but you can call them whatever you like.

      const [modaleIsOpen, setModaleIsOpen] = useState(false)

The initial state should be set to **false**.

An action at the parent component's level allows to change the state to **true**

    const  handleSubmit = ( => {
	    setModaleIsOpen(true)
    }
This displays the Modal component:

    {modaleIsOpen && (
	    <Modale
		    hideModale={closeModale}
		    styleModaleBackground
		    styleModale
		    styleModaleContent
		    animation={true}
		    closeButton={true}
	    >
		    <p>Your modal's message here !</p>	      
	    </Modale>
    )}

### Props

Name  | Type | Description | Required
------------- | ------------- | ------------- | ------------- 
*hideModale*  | Function | to close modal | **required**
*styleModaleBackground*  | Object | inline styles | optional
*styleModale*  | Object | inline styles | optional
*styleModaleContent*  | Object | inline styles | optional
*animation*  | Boolean | to activate or not the animation of the modal appear | **required**
*closeButton*  | Boolean | to display or not button close | **required**


   **1. *hideModale* prop**

The "*hideModale*" prop receives the close modal function as value. This enables the modal to be closed on button click or on modal's background click.

"*hideModale*" is **required**.
   
     const  closeModale = () => {
        setModaleIsOpen(false)
     }

 **2. *styleModaleBackground* prop**
 
 The "*styleModaleBackground*" prop receives inline styles you want to customize for  the modal background

 **3. *styleModale* prop**

The "*styleModale*" prop receives inline styles you want to customize for  the modal container

**4. *styleModaleContent* prop**

The "*styleModaleContent*" prop receives inline styles you want to customize for  the modal's content

**5. *animation* prop**

The modal comes with a built-in animation effect that can be turned on by setting the *animation* prop to **true** or turned off with **false**.

"*animation*" is **required**.

**6. *closeButton* prop**

The "*closeButton*" prop receives a boolean value.
It's equal **true** to display the button close.
It's equal **false** if you don't want to display any close button.

"*closeButton*" is **required**.