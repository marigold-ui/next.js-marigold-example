import { Button, Tooltip, Select } from "@marigold/components";
import { Info } from '@marigold/icons';

const Label = (
    <>
        chose ur fav sport
        <Tooltip.Trigger>
            <Button>
                <Info className="text-text-info" />
            </Button>
            <Tooltip>Tooltip</Tooltip>
        </Tooltip.Trigger>
    </>
)

export default function Sports() {
    return (
        <div>
            <Select label={Label}>
                <Select.Option key="football">football</Select.Option>
                <Select.Option key="basketball">basketball</Select.Option>
            </Select>
        </div>
    )
}