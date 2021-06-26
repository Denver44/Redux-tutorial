**REDUX FORM**
    - <https://redux-form.com/8.3.0/>
    - npm i react-redux-form.
    - It makes your life very easy.
    - It has it own Action creator and Reducers.
    - We have to just wire up this redux form with our redux store.
  
**This is what we have to do Just to wire up the redux-form with our reducers**

'''
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  form: formReducer,
});

 '''
**Redux-Form Field**

    - we have to use Field component when we have to show a field to use user.
    - One props always required is name 
    - Name is that field property like name as title , age etc.
    - Second props we have to pass it the component like input, checkbox, dropdown.
    - component ={input}
    - We can add validation to our redux form and lots oof things can be added.
    - In props we get initialize, pristine submitting , handleSubmit like function.