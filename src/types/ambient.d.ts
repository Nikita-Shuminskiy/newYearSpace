declare module "gray-matter" {
  export interface GrayMatterFile<T = any> {
    data: T;
    content: string;
    excerpt?: string;
  }
  const matter: (input: string) => GrayMatterFile<any>;
  export default matter;
}
