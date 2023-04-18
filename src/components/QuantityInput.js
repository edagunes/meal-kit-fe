import { useRef, useState } from 'react';
import { createStyles, NumberInput, ActionIcon } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${'1px'} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    border: `${'1px'} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  control: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `${'1px'} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,

    '&:disabled': {
      borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },

  input: {
    textAlign: 'center',
    paddingRight: `${theme.spacing.sm} !important`,
    paddingLeft: `${theme.spacing.sm} !important`,
    flex: 1,
  },
}));

export function QuantityInput() {
  const { classes } = useStyles();
  const handlers = useRef();
  const [value, setValue] = useState(1);

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current?.decrement()}
        disabled={value === 1}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconMinus size="1rem" stroke={1.5} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={1}
        max={10}
        handlersRef={handlers}
        value={value}
        onChange={setValue}
        classNames={{ input: classes.input }}
      />

      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current?.increment()}
        disabled={value === 10}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconPlus size="1rem" stroke={1.5} />
      </ActionIcon>
    </div>
  );
}