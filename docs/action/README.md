[**typescript-action-template**](../README.md)

***

[typescript-action-template](../README.md) / action

# action

Action logic

Contains the main logic for the GitHub Action

## Classes

| Class | Description |
| ------ | ------ |
| [Action](classes/Action.md) | Main action class for the GitHub Action. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Inputs](type-aliases/Inputs.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [getInputs](functions/getInputs.md) | Retrieves and normalizes GitHub Action inputs based on the provided labels. |
| [safeInputs](functions/safeInputs.md) | Takes the action inputs and returns a sanitized version with sensitive keys removed. |
| [main](functions/main.md) | Waits for the specified number of milliseconds as defined in the action's inputs. |
| [delay](functions/delay.md) | Waits for a number of milliseconds. |

## References

### default

Renames and re-exports [main](functions/main.md)
