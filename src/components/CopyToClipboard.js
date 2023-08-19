import React, {useRef} from 'react';
import { Box, Button, Popover, StatusIndicator } from '@cloudscape-design/components';
export default () => {
    const inputRef = useRef(null);

    const handleCopyClick = () => {
        if (inputRef.current) {
            navigator.clipboard.writeText(inputRef.current.value);
        }
    };

    return (
        <span className="custom-wrapping">
        <Box margin={{right: 'xxs'}} display="inline-block">
        <Popover
          size="small"
          position="top"
          triggerType="custom"
          dismissButton={false}
          content={<StatusIndicator type="success">[Name of the content] copied</StatusIndicator>}
      >
        <Button
            variant="inline-icon"
            iconName="copy"
            ariaLabel="Copy [name of the content]"
            onClick={() => {
                navigator.clipboard.writeText(inputRef.current.value);
            }}
        />
      </Popover>

    </Box>
            <input ref={inputRef} type="text" placeholder="输入要复制的文本"/>

  </span>
    );
};
