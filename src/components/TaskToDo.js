const TaskToDo = () => {
  return (
    <div className="container" id="task">
      <h4>Submission Instructions:</h4>
      <p>
        Please push the code up to Github or another cloud repository of your
        choice and share the link. Please include detailed instructions on how
        to get the code up and running (dependencies to install, commands to
        run, etc.) in the README.md II.
      </p>
      <h4>General Instructions:</h4>
      <ul id="task">
        <li> ● Follow the specifications below to the letter </li>
        <li>
          ●If constrained by time, please document carefully any deviations from
          the specification
        </li>
        <li>
          ● Use ES6 or TypeScript (TS is a plus if you know it, but not a must).
        </li>
        <li>● Use create react app https://github.com/facebook/create-react-app </li>
        <li>● You are free to choose any additional libraries for frontend
        </li>
        <li>
          ● Try to break out client side state management from rendering code.
        </li>
        <li>
          ● Use express or similar level tool for NodeJS 
        </li>
        <li>● Do not use any
          “scaffolding” (code generation etc)</li>
      </ul>
      <h4>III. Requirements: </h4>
      <ul id="task">
        <li>● Client visuals </li>
        <li> ● Render a full page application with three panels</li>
        <li>● Navigation panel shows a list of channels </li>
        <li>
          ● Message list panel shows a list of message bodies 
        </li>
        <li>● Editor panel
          shows a text editor</li>
        <li> ● Editor has a submit button </li>
        <li>● Client interactions</li>
        <li>● Clicking a channel in navigation panel selects that channel</li>
      </ul>
    </div>
  );
};

export default TaskToDo;
