public class Part2 {
    public static String findGeneSample(String dna, int startCodon, int stopCodon){
        String result = "";
        dna = dna.toUpperCase();
        while(stopCodon != -1){
            int startIndex = dna.indexOf("ATG");
            int stopIndex = dna.indexOf("TAA", startIndex+3);
            if((stopIndex+3 - startIndex)%3!=0){
                return "";
            } else{
                findGeneSample(dna, startIndex, stopIndex+3);
                return result;
            }
            
        }
        return result;
    }

    public static void testSimpleGene(){
        String dna1 = "TAAGTATAA";
        String dna2 = "GTATGDATAGTA";
        String dna3 = "AGTATGTATTGCTAATATTG";
        String dna4 = "AGTATGTATTGCAATATTG";
        String dna5 = "GTTAGTAATGRTGTAA";

        System.out.println("GIVEN GENE : " + dna1 + "\nGENE FOUND : " + findGeneSample(dna1,0, dna1.length()) + "\n\n");
        System.out.println("GIVEN GENE : " + dna2 + "\nGENE FOUND : " + findGeneSample(dna2,0, dna2.length()) + "\n\n");
        System.out.println("GIVEN GENE : " + dna3 + "\nGENE FOUND : " + findGeneSample(dna3,0, dna3.length()) + "\n\n");
        System.out.println("GIVEN GENE : " + dna4 + "\nGENE FOUND : " + findGeneSample(dna4,0, dna4.length()) + "\n\n");
        System.out.println("GIVEN GENE : " + dna5 + "\nGENE FOUND : " + findGeneSample(dna5,0, dna5.length()) + "\n\n");
    }

    public static void main(String[] args) {
        testSimpleGene();
    }
}
