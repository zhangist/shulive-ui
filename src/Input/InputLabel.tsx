import * as classNames from 'classnames'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { FormLabel } from '../Form'

export interface Props {
  /**
   * The contents of the `InputLabel`.
   */
  children?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation?: boolean,
  /**
   * If `true`, apply disabled class.
   */
  disabled?: boolean,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean,
  /**
   * If `true`, the input of this label is focused.
   */
  focused?: boolean,
  /**
   * `classes` property applied to the `FormControl` element.
   */
  FormControlClasses?: object,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin?: 'dense',
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required?: boolean,
  /**
   * If `true`, the label is shrunk.
   */
  shrink?: boolean,
  htmlFor?: string,
}

export interface ContextTypes {
  muiFormControl?: any|object,
}

const InputLabel: React.SFC<Props> = (props, context) => {
  const {
    children,
    className: classNameProp,
    disableAnimation = false,
    disabled = false,
    FormControlClasses,
    margin: marginProp,
    shrink: shrinkProp,
    ...other,
  } = props

  const { muiFormControl } = context
  let shrink = shrinkProp

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.dirty || muiFormControl.focused || muiFormControl.adornedStart
  }

  let margin = marginProp
  if (typeof margin === 'undefined' && muiFormControl) {
    margin = muiFormControl.margin
  }

  const className = classNames(
    'Sui_InputLabel_root',
    {
      'Sui_InputLabel_form-control': muiFormControl,
      'Sui_InputLabel_animated': !disableAnimation,
      'Sui_InputLabel_shrink': shrink,
      'Sui_InputLabel_disabled': disabled,
      'Sui_InputLabel_label-dense': margin === 'dense',
    },
    classNameProp,
  )

  return (
    <FormLabel data-shrink={shrink} className={className} {...other}>
      {children}
    </FormLabel>
  )
}

InputLabel.contextTypes = {
  muiFormControl: PropTypes.object,
}

export default InputLabel
