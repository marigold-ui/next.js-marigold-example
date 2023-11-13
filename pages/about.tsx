import { Card, Stack, Text } from "@marigold/components";

export default function About() {
    return (
        <Card>
            <Stack space={4}>
                <Text fontSize="2xl">About us</Text>
                <Text>Tickets verkaufen trotz Coronaeinschränkungen? Kein Problem!
                    Ob Corona-Testing, Personalisierung, Hygienekonzept, Streaming-Lösung oder kontaktlose Zutrittskontrolle - Wir haben uns mit allen gesetzlichen Anforderungen an das digitale Ticketing auseinandergesetzt und schnelle sowie unkomplizierte Lösungen für Veranstaltungen entwickelt!
                </Text>
            </Stack>
        </Card>
    )
}