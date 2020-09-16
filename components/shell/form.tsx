import * as React from 'react'

import ShellInput from './input'
import ShellLabel from './label'
import ShellOutput from './output'

interface IShellFormProps {
  content?: string | null
  size?: string | null
}

interface IShellFormState {
  // content: string | null
}

export default class ShellForm extends React.Component<IShellFormProps, IShellFormState> {
  public handleSubmit = (event: any) => {
    event.preventDefault()

    // const url = `https://stackoverflow.com/search?q=${this.content}`

    // window.location.href = url
  }

  public keyDownEvent = (event: any) => {
    // this.content = event.target.value
  }

  public keyPressedEvent = (event: any) => {
    // this.content = event.target.value
  }

  public render() {
    return (
      <div id="programmer-shell">
        <form id="shell-form" className={`shell-form ${this.props.size}`} onSubmit={this.handleSubmit}>
          <h1>
            <ShellLabel />.<ShellInput keyDownEvent={this.keyDownEvent} keyPressedEvent={this.keyPressedEvent} />
            <ShellOutput content={this.props.content} />
          </h1>
        </form>
      </div>
    )
  }
}
