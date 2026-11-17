"use client";

import {
  Badge,
  Banner,
  BlockStack,
  Box,
  Card,
  InlineStack,
  Layout,
  List,
  Page,
  Text,
} from "@shopify/polaris";

const ALWAYS_ALLOWED = ["VORKASSE2"];

export default function Home() {
  return (
    <Page
      title="Discount check"
      subtitle="Checkout keeps one promotional discount code. Payment codes in the allow list can stay alongside it."
    >
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Checkout rule
              </Text>
              <Text as="p" variant="bodyMd">
                The checkout extension watches discount codes on the purchase
                checkout block. When a customer applies a second promotional
                code, the previous promotional code is removed and the newest
                one is kept.
              </Text>
              <List type="bullet">
                <List.Item>
                  One promotional discount code is allowed at a time.
                </List.Item>
                <List.Item>
                  The newest promotional code replaces the one already applied.
                </List.Item>
                <List.Item>
                  Allow-listed codes are ignored by this rule and can stay on
                  the order.
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Always allowed
              </Text>
              <Text as="p" variant="bodyMd">
                These codes are compared without case sensitivity and are never
                removed by the extension.
              </Text>
              <InlineStack gap="200">
                {ALWAYS_ALLOWED.map((code) => (
                  <Badge key={code} tone="success">
                    {code}
                  </Badge>
                ))}
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Customer message
              </Text>
              <Text as="p" variant="bodyMd">
                After a promotional code is replaced, checkout shows this
                dismissible warning.
              </Text>
              <Banner title="Rabattcode ersetzt!" tone="warning">
                <p>
                  Es kann nur ein Aktionsrabattcode verwendet werden. Der
                  vorherige Rabattcode wurde automatisch ersetzt.
                </p>
              </Banner>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Where it runs
              </Text>
              <Box>
                <BlockStack gap="200">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="span" variant="bodyMd">
                      Extension
                    </Text>
                    <Badge>discount extension</Badge>
                  </InlineStack>
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="span" variant="bodyMd">
                      Target
                    </Text>
                    <Badge>Checkout</Badge>
                  </InlineStack>
                </BlockStack>
              </Box>
              <Text as="p" variant="bodyMd" tone="subdued">
                purchase.checkout.block.render
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
