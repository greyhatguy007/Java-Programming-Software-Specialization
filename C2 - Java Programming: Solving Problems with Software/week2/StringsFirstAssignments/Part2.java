public class Part2 {
    public static String findGeneSample(String dna){
        int startIndex = dna.indexOf("ATG");
        int currIndex = dna.indexOf("TAA", startIndex+3);
        while (currIndex != -1){
            if((currIndex-startIndex)%3==0){
                return dna.substring(startIndex, currIndex+3);
            } else {
                currIndex = dna.indexOf("TAA", currIndex+1);
            }
        }
        return "";
    }

    public static int findStopCodon(String dna, int startIn, String stopCodon){
        int currIndex = dna.indexOf(stopCodon, startIndex+3);
        while(currIndex != -1){
            if((currIndex-startIndex)%3==0){
                return currIndex;
            } else {
                currIndex = dna.substring(startIn, stopCodon+1);
            }
        }
        return dna.length();
    }

    public static String findGene(String dna){
        int startIndex = dna.indexOf("ATG");
        if(startIndex==-1){
            return "";
        }
        int taaIndex = findStopCodon(dna, startIndex, "TAA");
        int tagIndex = findStopCodon(dna, startIndex, "TAG");
        int tgaIndex = findStopCodon(dna, startIndex, "TGA");
        int minIndex =  Math.min(taaIndex,Math.min(tgaIndex, tagIndex));
        if(minIndex==dna.length()){
            return "";
        }
        return dna.substring( startIndex, minIndex+3);
    }

    public static void testSimpleGene(){
        String dna1 = "TAAGTATAA";
        String dna2 = "GTATGDATAGTA";
        String dna3 = "AGTATGTATTGCTAATATTG";
        String dna4 = "AGTATGTATTGCAATATTG";
        String dna5 = "GTTAGTAATGRTGTAA";

        System.out.println("GIVEN GENE : " + dna1 + "\nGENE FOUND : " + findGene(dna1) + "\n\n");
        System.out.println("GIVEN GENE : " + dna2 + "\nGENE FOUND : " + findGene(dna2) + "\n\n");
        System.out.println("GIVEN GENE : " + dna3 + "\nGENE FOUND : " + findGene(dna3) + "\n\n");
        System.out.println("GIVEN GENE : " + dna4 + "\nGENE FOUND : " + findGene(dna4) + "\n\n");
        System.out.println("GIVEN GENE : " + dna5 + "\nGENE FOUND : " + findGene(dna5) + "\n\n");
    }

    public static void main(String[] args) {
        testSimpleGene();
    }
}
