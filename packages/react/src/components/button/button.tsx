import styled, { css } from 'styled-components'
import { SizeType } from '../../common/types'
import { forwardRef } from 'react'
import { ColorSchema, getCssVariable } from '../../utils/theme'

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  variant?: 'solid' | 'outline' | 'ghost'
  colorScheme?: ColorSchema
  size?: SizeType
}

const StyledButton = styled.button<ButtonProps>`
  font-weight: 600;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  user-select: none;
  transition-property: ${getCssVariable('transition-property-common')};
  transition-duration: ${getCssVariable('transition-duration-normal')};

  ${({ variant, colorScheme, disabled }) =>
    variant === 'solid' &&
    css`
      color: #fff;
      background-color: var(--cy-colors-${colorScheme}-500);

      ${!disabled &&
      css`
        &:hover {
          background-color: var(--cy-colors-${colorScheme}-600);
        }

        &:active {
          background-color: var(--cy-colors-${colorScheme}-700);
        }
      `}
    `}

  ${({ variant, colorScheme, disabled }) =>
    (variant === 'outline' || variant === 'ghost') &&
    css`
      color: var(--cy-colors-${colorScheme}-600);
      background: transparent;
      ${variant === 'outline' &&
      css`
        border: 1px solid currentColor;
      `};

      ${!disabled &&
      css`
        &:hover {
          background-color: var(--cy-colors-${colorScheme}-50);
        }

        &:active {
          background-color: var(--cy-colors-${colorScheme}-100);
        }
      `}
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 14px;
      height: 32px;
      padding-inline-start: 12px;
      padding-inline-end: 12px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: 16px;
      height: 40px;
      padding-inline-start: 16px;
      padding-inline-end: 16px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 18px;
      height: 48px;
      padding-inline-start: 24px;
      padding-inline-end: 24px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `}
`

const Button = (
  {
    variant = 'solid',
    colorScheme = 'gray',
    size = 'md',
    children,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  return (
    <StyledButton
      ref={ref}
      type="button"
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

Button.displayName = 'CyButton'

export default forwardRef(Button)
