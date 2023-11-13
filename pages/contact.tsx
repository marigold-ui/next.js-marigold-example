import { Button, Card, Inline, Stack, Text } from "@marigold/components";

export default function Contact() {
    return (
        <Inline space={6} alignX="center">
            <Card>
                <Stack space={4}>
                    <Text fontSize="xl">Talk to a member of our team</Text>
                    <Text> Lorem, ipsum dolor sit amet consectetur adipisicing eli</Text>
                    <Button variant="primary" fullWidth>Contact sales</Button>
                </Stack>
            </Card>
            <Card>
                <Stack space={4}>
                    <Text fontSize="xl">Product and account support</Text>
                    <Text> Lorem, ipsum dolor sit amet consectetur adipisicing eli</Text>
                    <Button variant="secondary" fullWidth>Go to the help center</Button>
                </Stack>
            </Card>
        </Inline>
    )
}