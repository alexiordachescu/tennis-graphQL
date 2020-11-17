import gql from "graphql-tag";

export const GET_ALL_MATCHES = gql`
  query AllMatches(
    $order_by: [matches_order_by!] = { started_at: desc }
    $finished: Boolean_comparison_exp = { _eq: false }
  ) {
    ongoing: matches(order_by: $order_by, where: { finished: $finished }) {
      id
      p1_id
      p2_id
      winner_ref
      setts {
        p1_score
        p2_score
      }
      p1 {
        name
      }
      p2 {
        name
      }
    }
    finished: matches(order_by: $order_by, where: { finished: { _eq: true } }) {
      id
      p1_id
      p2_id
      winner_ref
      setts {
        p1_score
        p2_score
      }
      p1 {
        name
      }
      p2 {
        name
      }
    }
  }
`;
