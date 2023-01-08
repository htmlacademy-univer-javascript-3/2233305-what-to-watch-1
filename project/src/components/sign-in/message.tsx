function Message(props : {message : string}): JSX.Element {
  return (
    <div className="sign-in__message">
      <p>{props.message}</p>
    </div>
  );
}

export default Message;
