// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  Layout,
  Fill,
  Fit,
  Link,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reduxFormLogo: require("../assets/images/rf-logo.png"),
  reduxFormLogoValueLifecycle: require("../assets/images/rf-valueLifecycle.png"),
  reduxLogo: require("../assets/images/redux-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#464547",
  tertiary: "#39C2D7",
  quartenary: "#A3C644"
}, {
  primary: "Oswald",
  secondary: "Source Sans Pro"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Image src={images.reduxFormLogo.replace("/", "")} margin="0px auto 40px" height="181px"/>
          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            redux-forms
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} textColor="tertiary" caps>Where to keep form state</Heading>
          <List>
            <ListItem>DOM</ListItem>
            <ListItem>Component State</ListItem>
            <ListItem>External Store</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Form state in DOM
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Means using refs in terms of react or uncontrolled components
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/statelessForm.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Form state in React Component
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Means to use Controlled Components
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/statefullForm.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary" margin="0 0 40px 0">
            External Store
          </Heading>
          <Layout>
            <Fill>
              <Text bold caps textColor="secondary" textAlign="right">
                <Image src={images.reduxLogo.replace("/", "")} margin="0px auto 50px" height="200px" margin="0px 30px 0px 0px"/>
              </Text>
            </Fill>
            <Fill>
              <Text bold caps textColor="secondary" lineHeight="1.8" textSize="100px" textAlign="left">
                Redux
              </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text bold caps textColor="secondary" textAlign="right">
                <Image src={images.reduxFormLogo.replace("/", "")} height="181px" margin="0px 30px 0px 0px" />
              </Text>
            </Fill>
            <Fill>
              <Text bold caps textColor="secondary" lineHeight="1.8" textSize="100px" textAlign="left">
                Redux-form
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Redux-form Initialization
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Put a form reducer in your reducers
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/03.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Redux-form Configuration
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Wrap your form in a redux form HOC and give it a unique name <Link textSize={15} href="https://codesandbox.io/s/nw6k00pl9l" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/04.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Redux-form Options
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            You might pass options as properties to your wrapped Form <Link textSize={15} href="https://codesandbox.io/s/nw6k00pl9l" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/05.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Field Component
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Redux-form uses special component to render fields
            <br />
            It needed to connect any kind of input with redux-form store
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/06.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Field Value Lifecycle
          </Heading>
          <Image src={images.reduxFormLogoValueLifecycle.replace("/", "")} height="420px" margin="20px 0px" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Field with custom input
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            You might use string, components or arrow functions as field component prop
            <br />
            It works like adapter to fit third party plugins into redux-form <Link textSize={15} href="https://codesandbox.io/s/KZ52KN0ZY" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/07.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Synchronous validation
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Validate function should return object with field names and errors
            <br />
            Form level error might be returned with special _error property <Link textSize={15} href="https://codesandbox.io/s/7y6AgYDO" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/08.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Asynchronous validation
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Normally it will be trigerred before submit
            <br />
            But you may configure redux-form to run it on field blur <Link textSize={15} href="https://codesandbox.io/s/7y6AgYDO" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/11.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Submit validation
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            The only thing is to reject submit promise with SubmissionError <Link textSize={15} href="https://codesandbox.io/s/7y6AgYDO" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/12.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Show field level error
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Each field have meta object with additional propertis <Link textSize={15} href="https://codesandbox.io/s/7y6AgYDO" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/13.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Show form level error
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Form level eror will be passed to your form component as an error prop <Link textSize={15} href="https://codesandbox.io/s/7y6AgYDO" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/10.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Fields Component
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            You may combine multiple fields into one complex render <Link textSize={15} href="https://codesandbox.io/s/WnDOyRBlE" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/fields.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Fields Array Component
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Useful if you need dynamic forms, receives fieds prop to manage it <Link textSize={15} href="https://codesandbox.io/s/98znkDx6D" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/fieldsArray.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            FormSection Component
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            Used to reuse form parts, puts all its childrens behind the prefix <Link textSize={15} href="https://codesandbox.io/s/1rQqD03v3" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/formSection.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Redux-Form Action Creators
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            redux-form exports all of its internal action creators
            <br />
            allowing you full control of dispatching any action you wish. <Link textSize={15} href="https://codesandbox.io/s/oQwpqpED3" target="_blank">Sandbox</Link>
          </Text>
          <List>
            <ListItem textSize={30}>Component control: initialize and destroy actions</ListItem>
            <ListItem textSize={30}>Form state control: submit, reset, startAsyncValidation and other action</ListItem>
            <ListItem textSize={30}>Field manipulations: change, blur, touch and bunch of fieldarray actions</ListItem>
          </List>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/remoteSubmit.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Redux-Form Selectors
          </Heading>
          <Text bold caps textColor="secondary" textAlign="center" textSize={30}>
            redux-form provides a set of useful Redux state selectors
            <br />
            allowing you to query the state of any of your forms in any component. <Link textSize={15} href="https://codesandbox.io/s/mw9vERLRG" target="_blank">Sandbox</Link>
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/selectors.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Redux-Form with Call API middleware
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/formToAPI.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth="1200">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Links
          </Heading>
          <List>
            <ListItem textSize={30}><Link href="http://redux-form.com/" target="_blank">Redux-form docs</Link></ListItem>
            <ListItem textSize={30}><Link href="https://facebook.github.io/react/docs/forms.html" target="_blank">Forms with react controlled components</Link></ListItem>
            <ListItem textSize={30}><Link href="https://facebook.github.io/react/docs/uncontrolled-components.html" target="_blank">Forms with react uncontrolled components</Link></ListItem>
            <ListItem textSize={30}><Link href="https://github.com/xgrommx/awesome-redux" target="_blank">Redux plugins list</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
